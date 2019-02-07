import React from 'react';
import {Col, Row, Carousel, Card, Icon, Avatar} from 'antd';
import { Link, withRouter } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';

const {Meta} = Card;

class Members extends React.Component {

  render(){

    const meta = {
      title: 'Members and Allies: Professionals | Guild Studios',
      description: 'Searching for good professionals in Aracaju Sergipe: Well You found us',
      canonical: 'https://guildstudios.com.br/members',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'programmer,djs,producer,photographer,game server'
        }
      }
    };

    return(
      <DocumentMeta {...meta}>
      <>
      <Row gutter={24} type="flex" justify="start" align="middle">
            <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} style={{padding: 20, paddingRight: 40}}>
              <Card
          style={{ width: 300 }}
          cover={<Link to="/members/kovacs/"><img alt="example" width="300" src="https://instagram.faju2-1.fna.fbcdn.net/vp/27b51c48392e18685847bbb7a1c6d62d/5CDAA9D8/t51.2885-15/e35/47690420_2245118082420309_4770280446898698684_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" /></Link>}
          actions={[<a href="mailto:kovacs@guildstudios.com.br"><Icon type="mail" /></a>, <a href="https://github.com/ezequielkovacs/" target="_blank" ><Icon type="github" /></a>, <a href="https://www.instagram.com/ezequiel.kovacs/" target="_blank"><Icon type="code" /></a>, <Link to="/members/kovacs"><Icon type="ellipsis" /></Link>]}
              >
              <Meta
            avatar={<Avatar src="https://instagram.faju2-1.fna.fbcdn.net/vp/27b51c48392e18685847bbb7a1c6d62d/5CDAA9D8/t51.2885-15/e35/47690420_2245118082420309_4770280446898698684_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />}
            title=<Link to="/members/kovacs" style={{color: "#222222"}} >Ezequiel Kovacs</Link>
            description="Programmer"
              />
              </Card>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} style={{padding: 20, paddingRight: 40}}>
            <Card
      style={{ width: 300 }}
      cover={<img alt="example" width="300" src="https://instagram.faju2-1.fna.fbcdn.net/vp/4f54a5a4e59880fd464c3250cec6c6f4/5CE58D42/t51.2885-15/e35/35616795_352566388603524_7125844068302585856_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />}
      actions={[<a href="mailto:bumpz@guildstudios.com.br"><Icon type="mail" /></a>, <a href="https://soundcloud.com/bumpzmusic" target="_blank"><Icon type="customer-service" /></a>, <a href="https://www.instagram.com/bumpz_music/" target="_blank"><Icon type="instagram" /></a>, <a href="http://bumpz.guildstudios.com.br" target="_blank"><Icon type="bulb" /></a>]}
            >
            <Meta
        avatar={<Avatar src="https://instagram.faju2-1.fna.fbcdn.net/vp/760b9ea4e4e635efc0563a04b96e6fe0/5CE8D04C/t51.2885-19/s150x150/49933421_281945512482565_3199131241106374656_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />}
        title="Mayko Santos"
        description="Producer and 3D Modelator"
            />
            </Card>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} style={{padding: 20, paddingRight: 40}}>
            <Card
      style={{ width: 300 }}
      cover={<img alt="example" style={{objectFit: 'cover', height: 300}} src="https://instagram.faju2-1.fna.fbcdn.net/vp/bf18faad86735735e0df1115b0e90c1d/5CF64F2E/t51.2885-15/e35/43517271_186244062290375_5165171792600248873_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />}
      actions={[<a href="mailto:stark@guildstudios.com.br" target="_blank"><Icon type="mail" /></a>, <a href="#"><Icon type="behance" /></a>, <a href="https://www.facebook.com/lucasjuanrocha" target="_blank"><Icon type="facebook" /></a>, <a href="https://www.instagram.com/lusca.stark/" target="_blank"><Icon type="instagram" /></a>]}
            >
            <Meta
        avatar={<Avatar src="https://instagram.faju2-1.fna.fbcdn.net/vp/39d0809c0d6a032afd5d6a7a50f4b0c0/5CE64A93/t51.2885-19/s150x150/35998965_271848256712381_3807407633669816320_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />}
        title="Lucas Stark"
        description="Photographer and Publisher"
            />
            </Card>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} style={{padding: 20, paddingRight: 40}}>
            <Card
      style={{ width: 300 }}
      cover={<img alt="example" style={{objectFit: 'cover', height: 300}} src="https://instagram.faju2-1.fna.fbcdn.net/vp/62f4e4f708eb1d0b3aaa6c82fae8c493/5CE8F209/t51.2885-15/e35/47691794_1976364799323875_9020396370719787193_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />}
      actions={[<a href="mailto:noiser@guildstudios.com.br" target="_blank"><Icon type="mail" /></a>, <a href="https://soundcloud.com/lucasnoiser" target="_blank"><Icon type="customer-service" /></a>, <a href="https://www.instagram.com/lucasnoiser/" target="_blank"><Icon type="instagram" /></a>, <a href="#"><Icon type="bulb" /></a>]}
            >
            <Meta
        avatar={<Avatar src="https://instagram.faju2-1.fna.fbcdn.net/vp/1afab7bf90016d678cfc961e4b47baa1/5CF550F0/t51.2885-19/s150x150/46600288_2029985530425445_2523686310267322368_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />}
        title="Lucas Noiser"
        description="DJ and Producer"
            />
            </Card>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} style={{padding: 20, paddingRight: 40}}>
            <Card
      style={{ width: 300 }}
      cover={<img alt="example" style={{objectFit: 'cover', height: 300}} src="https://instagram.faju2-1.fna.fbcdn.net/vp/e873dd443d6adfe0a196fd16adafb95d/5CFBA581/t51.2885-15/e35/39575481_457337251428521_3208226409881272320_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />}
      actions={[<a href="mailto:geraldo@guildstudios.com.br" target="_blank"><Icon type="mail" /></a>, <a href="#"><Icon type="behance" /></a>, <a href="https://www.facebook.com/gerld.neto" target="_blank"><Icon type="facebook" /></a>, <a href="https://www.instagram.com/gerld.neto" target="_blank"><Icon type="instagram" /></a>]}
            >
            <Meta
        avatar={<Avatar src="https://instagram.faju2-1.fna.fbcdn.net/vp/6dedc50543a5460fd8821a50aae75871/5CDA9716/t51.2885-19/s150x150/44634022_262011621183336_5816736047911927808_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />}
        title="Geraldo Neto"
        description="Photographer, VFX and Movie Maker"
            />
            </Card>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} style={{padding: 20, paddingRight: 40}}>
            <Card
          style={{ width: 300 }}
          cover={<img alt="example" style={{objectFit: 'cover', height: 300}} src="https://instagram.faju2-1.fna.fbcdn.net/vp/f4e8db32ca1f75a7b8357f5a7634d777/5CF304F4/t51.2885-15/e35/16906504_102112550319095_3712616412661940224_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />}
          actions={[<a href="mailto:alisul@guildstudios.com.br" target="_blank"><Icon type="mail" /></a>, <a href="https://www.facebook.com/Alfa.Veltro" target="_blank"><Icon type="facebook" /></a>, <a href="#"><Icon type="database" /></a>, <a href="#"><Icon type="link" /></a>]}
            >
            <Meta
          avatar={<Avatar src="https://instagram.faju2-1.fna.fbcdn.net/vp/cf2ec175b4e3dd517e3b7969c3e1cba5/5CFE0877/t51.2885-19/s150x150/26870384_155653858488135_6233068041324724224_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />}
          title="Alisson Sei la"
          description="Owner of Baiak Game Server"
            />
            </Card>
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} style={{padding: 20, paddingRight: 40}}>
            <Card
          style={{ width: 300 }}
          cover={<img alt="example" style={{objectFit: 'cover', height: 300}} src="https://instagram.faju2-1.fna.fbcdn.net/vp/a0d581279af24985ba61194f0cd734ef/5CDC30D0/t51.2885-19/s150x150/50237189_2344459189171336_8448097583426961408_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />}
          actions={[<a href="mailto:outloop.contato@gmail.com" target="_blank"><Icon type="mail" /></a>, <a href="https://www.facebook.com/outloop19/" target="_blank"><Icon type="facebook" /></a>, <a href="https://www.instagram.com/outloop_/" target="_blank"><Icon type="instagram" /></a>, <a href="#"><Icon type="link" /></a>]}
            >
            <Meta
          avatar={<Avatar src="https://instagram.faju2-1.fna.fbcdn.net/vp/a0d581279af24985ba61194f0cd734ef/5CDC30D0/t51.2885-19/s150x150/50237189_2344459189171336_8448097583426961408_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net" />}
          title="OutLoop"
          description="Creative Agency for Dj/Producers"
            />
            </Card>
          </Col>

      </Row>

            <div className="zone" style={{textAlign: "right", paddingTop: 15}}>
            <h2><i>"Ameaçar um homem de assédio é abuso de poder"<br />Kazuma Yuuji</i></h2>
            </div>
      </>
      </DocumentMeta>
    )
  }
}

export default withRouter(Members)
