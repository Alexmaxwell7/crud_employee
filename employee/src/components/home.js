import { useState, useEffect } from "react";
import {
  getemployee,
  insertemployee,
  updateemployee,
  removeemployee,
} from "../services/api";
import Swal from "sweetalert2";
import AddEmployee from "./addemployee";
import UpdateEmployee from "./updatemodal";
import { faPencil, faTrash,faUserPlus } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Table,
  Button,
  Space,
  Tooltip
} from "antd";
const { Content } = Layout;
const Employee = () => {
  const [employee, SetEmployee] = useState([]);
  const [isVisible, setisVisible] = useState(false);
  const [isUpdate, setisUpdate] = useState(false);
  const [id, setId] = useState([]);
  const toggleupdate = () => {
    setisUpdate(!isUpdate);
  };
  const toggleopen = () => {
    setisVisible(!isVisible);
  };
  const handleCancel = () => {
    setisVisible(false);
    setisUpdate(false);
  };
  const [isView, Setupdate] = useState(false);
  const getallemployee = async () => {
    const response = await getemployee();
    SetEmployee(response.data);
  };
  useEffect(() => {
    getallemployee();
  }, []);
 //edit employee
  const handleClickEdit = (data) => {
    setisUpdate(true);
    setId(data);
    console.log("edit", data);
  };
//delete employee
  const deleteemployee = (
    id,
    firstname,
    lastname,
    email,
    password,
    role,
    address,
    mobile
  ) => {
    console.log("idwas", id);
    Swal.fire({
      icon: "warning",
      title: "It Will Remove The Employee",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        removeemployee(id, {
          firstname,
          lastname,
          email,
          password,
          role,
          address,
          mobile,
          isView,
        })
          .then((res) => {
            if (res) {
              getallemployee();
              Swal.fire({
                icon: "success",
                title: "Data Remove Successfully",
              });
            }
          })
          .catch((e) => {
            Swal.fire({
              icon: "error",
              title: "Database Error Retry",
              text: { e },
            });
          });
      }
    });
  };
  //create/insert employee
  const handleOk = (record) => {
    console.log("record", record);
    Swal.fire({
      icon: "info",
      title: "It Will Save The Student",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        insertemployee(record)
          .then((res) => {
            if (res) {
              setisVisible(false);
              getallemployee();
              Swal.fire({
                icon: "success",
                title: "Data Created Successfully",
              });
            }
          })
          .catch((e) => {
            Swal.fire({
              icon: "error",
              title: "Database Error Retry",
              text: { e },
            });
          });
      }
    });
  };
  //update employee
  const handleupdate = (record) => {
    console.log("updatedform", record);
    Swal.fire({
      icon: "info",
      title: "It Will Update The Employee",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        updateemployee(record._id, record)
          .then((res) => {
            if (res) {
              setisUpdate(false);
              getallemployee();
              Swal.fire({
                icon: "success",
                title: "Data Updated Successfully",
              });
            }
          })
          .catch((e) => {
            Swal.fire({
              icon: "error",
              title: "Database Error Retry",
              text: { e },
            });
          });
      }
    });
  };
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "fname",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Action",
      key: "action",
      width: "20%",

      render: (text, item) => (
        <Space size="middle">
          <Tooltip title="Edit Employee">
          <FontAwesomeIcon
            icon={faPencil}
            style={{ fontSize: 15, color: "green " }}
            onClick={() => handleClickEdit(item)}
          />
          </Tooltip>
          <Tooltip title="Delete Employee">
          <FontAwesomeIcon
            icon={faTrash}
            style={{ fontSize: 15, color: "red " }}
            onClick={() =>
              deleteemployee(
                item._id,
                item.firstname,
                item.lastname,
                item.email,
                item.password,
                item.role,
                item.address,
                item.mobile
              )
            }
          />
          </Tooltip>
         
        </Space>
      ),
    },
  ];
  return (
    <Layout className="layout">
      <Content style={{ padding: "100px 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <h1>Employee Details</h1>
          </Breadcrumb.Item>
        </Breadcrumb>
        <AddEmployee
          isVisible={isVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
        <UpdateEmployee
          isVisible={isUpdate}
          handleupdate={handleupdate}
          record={id}
          handleCancel={handleCancel}
        />
        <Row gutter={20}>
          <Col style={{ marginBottom: "10px" }}>
            <Button type="primary" onClick={toggleopen}>
              Add Employee &nbsp;&nbsp;<FontAwesomeIcon
            icon={faUserPlus}
            style={{ fontSize: 15, color: "white " }}
          />
            </Button>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col xs={24} sm={24} md={24}>
            <Table dataSource={employee} columns={columns} pagination={false} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Employee;
