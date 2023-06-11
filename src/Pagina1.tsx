import React, { useState } from "react";
import { Layout, Menu, Card, Form, Input, Button } from "antd";
import "./App.css";


const { Header, Content } = Layout;

type CardType = {
  title: string;
  description: string;
  image: string;
};





const initialCards: CardType[] = [
  {
    title: "Card 1",
    description: "This is card 1",
    image: "https://picsum.photos/id/0/200",
  },
  {
    title: "Card 2",
    description: "This is card 2",
    image: "https://picsum.photos/id/10/200",
  },
  {
    title: "Card 3",
    description: "This is card 3",
    image: "https://picsum.photos/id/20/200",
  },
];

export function  Pagina1(){
  const [cards, setCards] = useState(initialCards);

 

  const onFinish = (values: any) => {
    const { name, email, password } = values;
    const newCard = {
      title: name, 
      description: email,
      image: `https://picsum.photos/seed/${name}/200`,
    };
    setCards([newCard,...cards ]);
    console.log(values);
    alert("Esti urat, dar pentru mama, tot urat esti!");
  };


  return (
   
    <Layout className="layout">
   
  <div className="side-nav">
  <Menu className="menu1" theme="dark" mode="vertical"  defaultOpenKeys={["sub1"]}>
    <Menu.SubMenu key="sub1" title="Fete">
      <Menu.Item key="1">Fete-frumoase</Menu.Item>
      <Menu.Item key="2">Nu chear</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu key="sub2" title="Money">
      <Menu.Item key="3">Bani usori</Menu.Item>
      <Menu.Item key="4">1XBET</Menu.Item>
    </Menu.SubMenu>
       <Menu.SubMenu key="sub3" title="Peste Hotare">
      <Menu.Item key="5">La Briceni</Menu.Item>
      <Menu.Item key="6">Nu te duce</Menu.Item>
     </Menu.SubMenu>
      </Menu>
      </div>

      <Content style={{ padding: "4% 50px",height: "100%" }}>
        <div className="site-layout-content">
        <div className="card-list">
  {cards.map((card) => (
    <Card className="card-form"
      key={card.title}
      hoverable
      style={{ width: "240px", margin: "16px" }}
      cover={<img alt={card.title} src={card.image} />}
    >
      <Card.Meta
        title={card.title}
        description={card.description}
      />
    </Card>
  ))}
</div>
          <Form onFinish={onFinish}>
  <Form.Item label="Name" name="name" initialValue="Scrie ceva ...">
    <Input />
  </Form.Item>
  <Form.Item label="Email" name="email" initialValue="Scrie ceva ...">
    <Input />
  </Form.Item>
  <Form.Item label="Password" name="password">
    <Input.Password />
  </Form.Item>
  <Form.Item>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>
          
        </div>
      </Content>

    </Layout>
   
  );
};

