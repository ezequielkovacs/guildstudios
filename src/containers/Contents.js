import React from 'react';
import {Card, Icon, Col, Row, Divider, Tag} from 'antd';
import DocumentMeta from 'react-document-meta';

//#f50 - ORANGE
//#108ee9 - BLUE
//#2db7f5 - LIGHT BLUE
//#8a3ab9 - INSTA PURPLE
//#e95950 - INSTA RED ORANGE
//#cd486b - INSTA MAROOM

const { Meta } = Card;

class Share extends React.Component {

  render(){
    const meta = {
      title: 'The best workshop online: See all the jobs | Guild Studios',
      description: 'All the latest works by our professionals are grouped to give You a great an memorable experience, give us a chance and look all our Jobs...',
      canonical: 'https://guildstudios.com.br/contents',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'workshop,pictures,music,programming,3D,photo,shoot,jobs'
        }
      }
    };
    return(


      <DocumentMeta {...meta}>

      <>
      <Row>
      <Col xs={{span: 24}} lg={{span: 6}}>
      <Card
    hoverable
    style={{ width: 300 }}
    cover={<a href="https://www.instagram.com/lusca.stark/" target="_blank"><img alt="example" style={{objectFit: 'cover', height: 300, width: 300}} src="https://instagram.faju2-1.fna.fbcdn.net/vp/281afc653a1ecbf0564e9beb10f649c0/5CFD44C5/t51.2885-15/e35/50690840_626102087843786_5371831152686475038_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" /></a>}
  >
    <Meta
      title={<h3><Icon type="hash" />Freedom</h3>}
      description={<p></p>}
    />
    <Tag color="#cd486b"><Icon type="instagram" /> Instagram</Tag>
    <Tag color="#8a3ab9"><Icon type="camera" /> Lucas Stark</Tag>
  </Card>
      </Col>

      <Col xs={{span: 24}} lg={{span: 6}}>
      <Card
    hoverable
    style={{ width: 300 }}
    cover={<a href="https://www.instagram.com/gerld.neto/" target="_blank"><img alt="example" style={{objectFit: 'cover', height: 300, width: 300}} src="https://instagram.faju2-1.fna.fbcdn.net/vp/987764bbd6ab49664f5fe2b3b573c72b/5CE1D5C6/t51.2885-15/fr/e15/s1080x1080/29088673_168174233993496_8916124834006564864_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" /></a>}
  >
    <Meta
      title={<h3><Icon type="hash" />Sample Shot #1</h3>}
      description={<p>Just silense</p>,<p></p>}
    />
    <Tag color="#cd486b"><Icon type="instagram" /> Instagram</Tag>
    <Tag color="#8a3ab9"><Icon type="camera" /> Geraldo Neto</Tag>
  </Card>
      </Col>

      <Col xs={{span: 24}} lg={{span: 6}}>
      <Card
    hoverable
    style={{ width: 300 }}
    cover={<a href="https://www.instagram.com/lusca.stark/" target="_blank"><img alt="example" style={{objectFit: 'cover', height: 300, width: 300}} src="https://instagram.faju2-1.fna.fbcdn.net/vp/aea6110c6638729755d8aaa8d7597559/5CF57979/t51.2885-15/e35/49299912_1020189854831834_3917747258522457336_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" /></a>}
  >
    <Meta
      title={<h3><Icon type="hash" />@jornalistarafaella</h3>}
      description={<p>Just silense</p>,<p></p>}
    />
    <Tag color="#cd486b"><Icon type="instagram" /> Instagram</Tag>
    <Tag color="#8a3ab9"><Icon type="camera" /> Lucas Stark</Tag>
  </Card>
      </Col>

      <Col xs={{span: 24}} lg={{span: 6}}>
      <Card
    hoverable
    style={{ width: 300 }}
    cover={<a href="https://www.instagram.com/lusca.stark/" target="_blank"><img alt="example" style={{objectFit: 'cover', height: 300, width: 300}} src="https://instagram.faju2-1.fna.fbcdn.net/vp/2e04144ad280fb500a7cc60448d1051f/5CF3E7AF/t51.2885-15/e35/46199924_336709047111139_5643772963278527474_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" /></a>}
  >
    <Meta
      title={<h3><Icon type="hash" />@djeddieportillo</h3>}
      description={<p>Just silense</p>,<p></p>}
    />
    <Tag color="#cd486b"><Icon type="instagram" /> Instagram</Tag>
    <Tag color="#8a3ab9"><Icon type="camera" /> Lucas Stark</Tag>
  </Card>
      </Col>

      </Row>
      </>


      <>
      <Card title="Bumpz Music - Fix Point (Original Mix)" extra={<a href="https://soundcloud.com/bumpzmusic" target="_blank">Soundcloud</a>}>
      <Row>
      <Col xs={{span: 24}} lg={{span: 12}}>
      <h3><i>Label: Deep Bear Recordings</i></h3>
      </Col>
      <Col xs={{span: 24}} lg={{span: 12}} style={{textAlign: "right"}}>
      <Tag color="#f50">Released</Tag>
      <Tag color="#108ee9">Deep House</Tag>
      </Col>
      <iframe width="100%" height="180" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/532042698&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false"></iframe>
      </Row>
      </Card>

      <Card title="Bumpz Music - Insomnia (Original Mix)" extra={<a href="https://soundcloud.com/bumpzmusic" target="_blank">Soundcloud</a>}>
      <Row>
      <Col xs={{span: 24}} lg={{span: 12}}>
      <h3><i>Label: Brisco</i></h3>
      </Col>
      <Col xs={{span: 24}} lg={{span: 12}} style={{textAlign: "right"}}>
      <Tag color="#f50">Released</Tag>
      <Tag color="#108ee9">Deep House</Tag>
      </Col>
      <iframe width="100%" height="180" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/453828897&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false"></iframe>
      </Row>
      </Card>

      <Card title="Lucas Noiser - SOUNDS OF NOISER #1" extra={<a href="https://soundcloud.com/lucasnoiser" target="_blank">Soundcloud</a>}>
      <Row>
      <Col xs={{span: 24}} lg={{span: 12}}>
      <h3><i>By himself</i></h3>
      </Col>
      <Col xs={{span: 24}} lg={{span: 12}} style={{textAlign: "right"}}>
      <Tag color="#f50">Released</Tag>
      <Tag color="#2db7f5">Eletrônica</Tag>
      </Col>
      <iframe width="100%" height="180" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/478550133&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false"></iframe>
      </Row>
      </Card>

      <div className="zone" style={{textAlign: "right", paddingTop: 15}}>
      <h2><i>"Tem o grave, o grave do grave e o grave alto"<br />Cristhian Melo</i></h2>
      </div>
      </>
      </DocumentMeta>
    )
  }
}

export default Share;
