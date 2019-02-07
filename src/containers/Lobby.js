import React from 'react';
import {Col, Row, Carousel, Card, Icon, Avatar} from 'antd';
import DocumentMeta from 'react-document-meta';

const { Meta } = Card;
class Dashboard extends React.Component {
  render() {
    document.title = "Guild Studios";

    const meta = {
      title: 'The bests professionals: For day or for night events | Guild Studios',
      description: 'Guild Studios share the contact and content of great professionals in divergents areas, like Programmers, Djs, Musical Producers, Photographers...',
      canonical: 'https://guildstudios.com.br/',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'professional, bests, for day, aracaju, programmer,djs,producer,photographer,game server'
        }
      }
    };

    return (
      <DocumentMeta {...meta}>
<>

      <div className="zone" style={{textAlign: "right", paddingTop: 15}}>
      <h2><i>"Ameaçar um homem de assédio é abuso de poder"<br />Kazuma Yuuji</i></h2>
      </div>
</>
    </DocumentMeta>
    )
  }
}


export default Dashboard
