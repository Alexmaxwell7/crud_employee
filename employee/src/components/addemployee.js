import React, {useState } from 'react';
import { Modal, Button, Select, Input, Form } from 'antd';
const { Option } = Select;

const formlayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
function AddEmployee({ isVisible, handleOk, handleCancel, }) {
  let [record, setRecord] = useState({
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    role: null,
    address: null,
    mobile: null,
  });
  let handleSelect = (value, name) => {
    setRecord({ ...record, [name]: value });
  };
  return (
    <Modal
    destroyOnClose={true}
    style={{ top: 20 }}
    title="Add Employee"
    visible={isVisible}
    // onOk={handleOk}
    onCancel={handleCancel}
    okText="Create"
    cancelText="Cancel"
    footer={[
      <Button type="primary" htmlType="submit" form="addemp">
        Create
      </Button>,
    ]}
    width={800}
  >
    <Form name="addemp" {...formlayout} 
    onFinish={() => handleOk(record, setRecord)}
    >
    <Form.Item
            label="First Name"
            name="firstname"
            rules={[
              {
                required: true,
                message: "Missing details!",
              },
            ]}
          >
            <Input name="firstname" placeholder='Enter the first name' onChange={(e) => { handleSelect(e.target.value, "firstname") }} />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              {
                required: true,
                message: "Missing details",
              },
            ]}
          >
            <Input name="lastname" placeholder='Enter the last name' onChange={(e) => { handleSelect(e.target.value, "lastname") }} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Missing details",
              },
            ]}
          >
            <Input name="email" placeholder='enter the email' onChange={(e) => { handleSelect(e.target.value, "email") }} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Missing details",
              },
            ]}
          >
            <Input name="password" placeholder='enter the password' onChange={(e) => { handleSelect(e.target.value, "password") }} />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
            rules={[
              {
                required: true,
                message: "Missing details",
              },
            ]}
          >
            <Select
              placeholder="Select a option"
              onChange={value => {
                handleSelect(value, 'role');
              }}
              allowClear
            >
              <Option value="admin">admin</Option>
              <Option value="manager">manager</Option>
              <Option value="developer">developer</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Missing details",
              },
            ]}
          >
            <Input name="address" placeholder='Enter the Address' onChange={(e) => { handleSelect(e.target.value, "address") }} />
          </Form.Item>
          <Form.Item
            label="Mobile"
            name="mobile"
            rules={[
              {
                required: true,
                message: "Missing details",
              },
            ]}
          >
            <Input name="mobile" placeholder='Enter the Mobile' onChange={(e) => { handleSelect(e.target.value, "mobile") }} />
          </Form.Item>
    </Form>
  </Modal>
  );
}

export default AddEmployee;
