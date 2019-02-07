import React from 'react';
import { Layout, Menu, Breadcrumb, Col, Row, Icon, Carousel, Button, } from 'antd';
import { Link, withRouter } from 'react-router-dom';


const {
  Header, Content, Footer, Sider,
} = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class CustomLayout extends React.Component {

constructor(props){
  super();
  this.onClickEvent = this.onClickEvent.bind(this)
  this.onClickEventFooter = this.onClickEventFooter.bind(this)
  this.state = {
    click: false,
    current: 'home',
    footer: true,
  }
}


onClickEvent = (e) => {
  e.preventDefault()
  this.setState({
    click: !this.state.click
  })
}


handleClick = (e) => {
  console.log('click ', e);
  this.setState({
    current: e.key,
  });
}

onClickEventFooter = (e) => {
  e.preventDefault()
  this.setState({
    footer: !this.state.footer,
  })
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

           <Menu.Item key="content">
             <Link to="/contents"><span style={{color: "#009eec"}}><Icon type="experiment" />Contents</span></Link>
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
          <Col span={24} style={{ paddingTop: 40, paddingBottom: 160}}>
          <div className="content-col">
        {this.props.children}
        </div>
          </Col>
          </Row>
          </>
        </Content>
          <Footer style={{textAlign: "center", position: "fixed", bottom: 0, width: '100%'}}>
          <Row style={{}}>
          <a href="" onClick={this.onClickEventFooter}><Icon type="swap" style={{fontSize: 30, color: "#222222"}}/></a>
          {this.state.footer ? (
          <>
          <p>
          The code is Open Source write by <Link to="/members/kovacs">Ezequiel Kovacs</Link> - 2019<br />
          This page only share professional Jobs from the members of Guild Studios. Hereby All Rights of the content herewith is reserved to Owner.
          </p>
          <a href="https://mail.zoho.com/" target="_blank" style={{color: "#222222"}}><Icon type="mail" /> Login Email</a>
          </>
        ) : ("")
        }

            </Row>
            </Footer>
      </Layout>
      </Layout>
    );
  }
}



export default withRouter(CustomLayout)
