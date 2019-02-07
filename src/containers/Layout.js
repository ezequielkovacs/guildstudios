import React from 'react';
import { Layout, Menu, Breadcrumb, Col, Row, Icon, Carousel, Button, Divider, Drawer } from 'antd';
import { Link, withRouter } from 'react-router-dom';


const {
  Header, Content, Footer, Sider,
} = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const pStyle = {
  fontSize: 16,
  color: 'rgba(0,0,0,0.85)',
  lineHeight: '24px',
  display: 'block',
  marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: '22px',
      marginBottom: 7,
      color: 'rgba(0,0,0,0.65)',
    }}
  >
    <p
      style={{
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);



class CustomLayout extends React.Component {

constructor(props){
  super();
  this.onClickEvent = this.onClickEvent.bind(this)
  this.onClose = this.onClose.bind(this)
  this.state = {
    click: false,
    current: 'home',
  }
}


onClickEvent = (e) => {
  e.preventDefault()
  this.setState({
    click: !this.state.click
  })
}

onClose = () => {
this.setState({
  click: false,
});
};

handleClick = (e) => {
  console.log('click ', e);
  this.setState({
    current: e.key,
  });
}

  render() {
    var footerStyle = {
      textAlign: 'center',
    }
    return(
      <Layout>
      <Menu
          style={{textAlign: "center", backgroundColor: "#222222", color: "#009eec", border: "none"}}
           onClick={this.handleClick}
           selectedKeys={[this.state.current]}
           mode="horizontal"
         >
           <Menu.Item key="home">
           <Link to="/gstudios">
             <span style={{color: "#009eec"}}><Icon type="home" />Guild Studios</span>
            </Link>
           </Menu.Item>
           <Menu.Item key="members">
             <Link to="/"><span style={{color: "#009eec"}}><Icon type="fire" />Members</span></Link>
           </Menu.Item>

           <Menu.Item key="curioso">
            <Link to="/curioso"><span style={{color: "#009eec"}}><Icon type="question" />Curioso</span></Link>
           </Menu.Item>
         </Menu>
   <Layout>
     <Header style={{ background: '#fff', padding: 0 }}>
     <Carousel autoplay autoplaySpeed={5000} adaptiveHeight={true}>
   <div>
   <h2>Bem vindos á nossa Guild</h2>
   <h4>Agradecemos a visita ao nosso lobby de profissionais disponíveis em Aracaju-SE</h4>
   </div>

   <div>
   <h2>Os conteúdos á seguir</h2>
   <h4>São de responsabilidade total do criador/profissional, por favor não copie sem autorização</h4>
   </div>

   <div>
   <h2>Gostária de participar?</h2>
   <h4>Tem alguma coisa que gostária de divulgar em nosso Quadro de Conteúdo? Nós envie por email sua requisição</h4>
   </div>

   <div>
   <h2>Nosso querido email de Contato</h2>
   <h4>Estámos confiando á você nosso endereço de email, use com sabedoria!</h4>
   </div>
 </Carousel>
     </Header>
     <Content className="content-col" style={{ margin: '24px 16px 0'}}>
          <>
          <Row gutter={24} type="flex" justify="space-around" align="middle">
          <Col span={24} style={{ paddingTop: 24, paddingBottom: 40}}>
          <div className="content-col">
        {this.props.children}
        </div>
          </Col>
          </Row>
          </>
        </Content>
          <Footer style={{textAlign: "center", position: "fixed", bottom: 0, width: '100%'}}>
          <Row style={{}}>
            <p>
            All rights of code reserved to <a href onClick={this.onClickEvent}>Ezequiel Kovacs</a> - 2019<br />
            This page only share professional Jobs from the members of Guild Studios. Hereby All Rights reserved to Owner.
            </p>
            <a href="https://mail.zoho.com/" target="_blank" style={{color: "#222222"}}><Icon type="mail" /> Login Email</a>
            </Row>
            </Footer>

          <Drawer
                width="640"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.click}
              >
                <p style={{ ...pStyle, marginBottom: 24 }}>CEO Profile</p>
                <p style={pStyle}>Personal</p>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Full Name" content="Ezequiel Andrade" />{' '}
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Account" content="kovacs@guildstudios.com.br" />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="City" content="Aracaju" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Country" content="Brazil" />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Birthday" content="January 24,1997" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Website" content="This Website" />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <DescriptionItem
                      title="Message"
                      content="Every man in himself has the most dangerous traitor.(Kierkegaard Gjerninger)"
                    />
                  </Col>
                </Row>
                <Divider />
                <p style={pStyle}>Company</p>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Position" content="Programmer" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Responsibilities" content="Coding" />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Department" content="AFX" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <DescriptionItem
                      title="Skills"
                      content="C / C # / Python / Js / Html / Css, data structures, software engineering, operating systems, computer networks, databases, computer architecture, Microcomputer Principle and Interface Technology, Computer English, etc."
                    />
                    <DescriptionItem
                      title="Portfolio Web"
                      content={
                      <>
                      <a href="#">Restaurante O Miguel</a> -
                      <a href="#"> Faculdade Jardins</a> -
                      <a href="#"> Nat e Vida</a> -
                      <a href="#"> Auto Escola LM</a> -
                      <a href="#"> Theo Peleteiro</a>
                      </>
                    }
                    />
                  </Col>
                </Row>
                <Divider />
                <p style={pStyle}>Contacts</p>
                <Row>
                  <Col span={12}>
                    <DescriptionItem title="Email" content="kovacs@guildstudios.com.br" />
                  </Col>
                  <Col span={12}>
                    <DescriptionItem title="Phone Number" content="+55 79 9 9145 7802" />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <DescriptionItem
                      title="Github"
                      content={(
                        <a href="http://github.com/ezequielkovacs/">
                          github.com/ezequielkovacs/
                        </a>
                      )}
                    />
                  </Col>
                </Row>
              </Drawer>
      </Layout>
      </Layout>
    );
  }
}



export default withRouter(CustomLayout)
