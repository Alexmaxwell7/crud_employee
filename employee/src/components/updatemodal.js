import React, { useEffect, useState } from "react";
import { Modal, Button, Select, Input, Form } from "antd";
const { Option } = Select;

const formlayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
function UpdateEmployee({ isVisible, handleupdate, handleCancel, record }) {
  const [form] = Form.useForm();
  const [record2, setRecord] = useState(record);
  const handleSelect = (value, name) => {
    setRecord({ ...record2, [name]: value });
  };
  useEffect(() => {
    form.setFieldsValue(record2);
  }, [record2, form]);
  useEffect(() => {
    if (record) {
      setRecord(record);
    }
  }, [record]);
  console.log("updated", record);
  return (
    <Modal
      destroyOnClose={true}
      style={{ top: 20 }}
      title="Udpate Employee"
      visible={isVisible}
      // onOk={handleOk}
      onCancel={handleCancel}
      okText="Create"
      cancelText="Cancel"
      footer={[
        <Button type="primary" htmlType="submit" form="updateemp">
          Update
        </Button>,
      ]}
      width={800}
    >
      <Form
        name="updateemp"
        {...formlayout}
        preserve={false}
        initialValues={{
          firstname: record.firstname ? record.firstname : "",
          lastname: record.lastname ? record.lastname : "",
          email: record.email ? record.email : "",
          password: record.password ? record.password : "",
          role: record.role ? record.role : "",
          address: record.address ? record.address : "",
          mobile: record.mobile ? record.mobile : "",
        }}
        onFinish={() => handleupdate(record2)}
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
          <Input
            name="firstname"
            onChange={(e) => {
              handleSelect(e.target.value, "firstname");
            }}
          />
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
          <Input
            name="lastname"
            onChange={(e) => {
              handleSelect(e.target.value, "lastname");
            }}
          />
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
          <Input
            name="email"
            onChange={(e) => {
              handleSelect(e.target.value, "email");
            }}
          />
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
          <Input
            name="password"
            onChange={(e) => {
              handleSelect(e.target.value, "password");
            }}
          />
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
            placeholder="Select a option and change input text above"
            onChange={(value) => {
              handleSelect(value, "role");
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
          <Input
            name="address"
            onChange={(e) => {
              handleSelect(e.target.value, "address");
            }}
          />
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
          <Input
            name="mobile"
            onChange={(e) => {
              handleSelect(e.target.value, "mobile");
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default UpdateEmployee;
