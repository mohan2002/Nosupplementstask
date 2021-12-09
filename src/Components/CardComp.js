import React, { useRef, useState } from 'react';
import "./Styles/Maincomponent.css"
import 'antd/dist/antd.css';
import { Card , Modal} from 'antd';
import { EditOutlined, DeleteFilled } from '@ant-design/icons';
import "./Styles/Maincomponent.css"
import { Form, Input} from 'antd';


function CardComp({User,deleteUser}) {
  const [like,setLike] = useState(false);
  const email = useRef()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const changes=[];
  const[details,changeDetails] = useState()

//   Modal for editing the details
  const showModal = () => {
    setIsModalVisible(true);
  };

//   Modal closes and changes the updates
  const handleOk = () => {
    details.map(detail => (
        changes.push(detail.value)
    ))
    User.email=changes[0];
    User.name=changes[1];
    User.phone=changes[2];
    User.website=changes[3];
    console.log(changes);
    setIsModalVisible(false);
    changeDetails()
  };
  

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    // values from 
  const[field,setfields] = useState([
      {
        name: ['Name'],
        value: User.name,
    },
    {
        name: ['Email'],
        value: User.email,
    },
    {
        name: ['Phone'],
        value: User.phone,
    },
    {
        name:['Website'],
        value: User.website,
    },
    ])


  return (
    <div>
        {/* Card */}
        <Card
        className="card"
            style={{display:'flex',flexDirection:'column'}}
            cover={
            <img
                alt="example"
                src={`https://avatars.dicebear.com/v2/avataaars/${User.username}.svg?options[mood][]=happy `}
                style={{height:200,backgroundColor:'#f5f5f5'}}
            />
            }
            actions={[
            like ? <i class="fas fa-heart bgh" onClick={() => {setLike(!like)}}></i>:<i class="far fa-heart" onClick={() => {setLike(!like)}}></i>,
            <EditOutlined key="edit" style={{fontSize:20}} onClick={showModal}/>,
            <DeleteFilled key="delete" style={{fontSize:20}} onClick={() => {deleteUser(User.id)}}/>,
            ]}
        >
            <div className="card-inner">
                <h3 className="heading">{User.name}</h3>
                <div className="contact">
                    <i class="far fa-envelope"></i>
                    <p>{User.email}</p>
                </div>
                <div className="contact">
                    <i class="fas fa-phone"></i>
                    <p>{User.phone}</p>
                </div>
                <div className="contact">
                    <i class="fas fa-globe"></i>
                    <p>{User.website}</p>
                </div>
                
            </div>
        </Card>


        {/* Modal */}
        <Modal title="Edit Details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
                fields={field}
                onFieldsChange={(_, allFields) => {
                    changeDetails(allFields)
                  }}
                >
                <Form.Item
                    label="Name"
                    name="Name"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                        
                    },
                    ]}
                >
                    <Input ref={email}/>
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="Phone"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Website"
                    name="Website"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                    
                >
                    <Input/>
                </Form.Item>
            </Form>

        </Modal>
    </div>

  );
}

export default CardComp;
