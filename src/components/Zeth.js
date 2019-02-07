import React from 'react';
import { Col, Row, Icon, Button, Divider } from 'antd';
import DocumentMeta from 'react-document-meta';

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


class Me extends React.Component {

  render(){
    const meta = {
      title: 'Programmer of Guild Studios and CEO: Curriculum Ezequiel Kovacs | Guild Studios',
      description: 'Programmer,data structures, software engineering, operating systems, computer networks, databases and more, look my portfolio if You like hire me...',
      canonical: 'https://guildstudios.com.br/members/kovacs',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'ezequiel kovacs,programmer,databases,portfolio, data structures, ceo'
        }
      }
    };
    return(
      <DocumentMeta {...meta}>
      <>
      <Row style={{paddingTop: 30}}>
      <Col span={6} justify="end">
      <img width="150" height="150" src="https://instagram.faju2-1.fna.fbcdn.net/vp/27b51c48392e18685847bbb7a1c6d62d/5CDAA9D8/t51.2885-15/e35/47690420_2245118082420309_4770280446898698684_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />
      </Col>
      <Col span={18} align="middle" style={{textAlign: "right", align: "bottom", paddingLeft: 80}}>
      <h2><i>"We are born to make history"</i><br />Ezequiel K.</h2>
      </Col>
      </Row>

      <Row style={{paddingTop:30}}>
        <Col xs={{span: 24}} lg={{span: 12}}>
          <DescriptionItem title="Full Name" content="Ezequiel Andrade" />{' '}
        </Col>
        <Col xs={{span: 24}} lg={{span: 12}}>
          <DescriptionItem title="Account" content="kovacs@guildstudios.com.br" />
        </Col>
      </Row>
      <Row>
        <Col xs={{span: 24}} lg={{span: 12}}>
          <DescriptionItem title="City" content="Aracaju" />
        </Col>
        <Col xs={{span: 24}} lg={{span: 12}}>
          <DescriptionItem title="Country" content="Brazil" />
        </Col>
      </Row>
      <Row>
        <Col xs={{span: 24}} lg={{span: 12}}>
          <DescriptionItem title="Birthday" content="January 24,1997" />
        </Col>
        <Col xs={{span: 24}} lg={{span: 12}}>
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
        <Col xs={{span: 24}} lg={{span: 12}}>
          <DescriptionItem title="Position" content="Programmer" />
        </Col>
        <Col xs={{span: 24}} lg={{span: 12}}>
          <DescriptionItem title="Responsibilities" content="Coding" />
        </Col>
      </Row>
      <Row>
        <Col xs={{span: 24}} lg={{span: 12}}>
          <DescriptionItem title="Department" content="AFX" />
        </Col>
        <Col xs={{span: 24}} lg={{span: 12}}>
          <DescriptionItem title="Coffee" content={<a>Without Sugar</a>} />
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
        <Col xs={{span: 24}} lg={{span: 12}}>
          <DescriptionItem title="Email" content={(<a href="mailto:kovacs@guildstudios.com.br" targer="_blank">kovacs@guildstudios.com.br</a>)}/>
        </Col>
        <Col xs={{span: 24}} lg={{span: 12}}>
          <DescriptionItem title="Phone Number" content={(<a href="tel:5579991457802" targer="_blank">+55 79 991 457 802</a>)} />
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
      </>
      </DocumentMeta>
    )
  }
}

export default Me;
