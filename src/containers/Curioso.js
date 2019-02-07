import React from 'react';
import DocumentMeta from 'react-document-meta';

class Vai extends React.Component {

  render(){
    const meta = {
      title: 'Ali Sul produziu sua primeira track: Curioso | Guild Studios',
      description: 'O Game Master dos servidores de Tíbia Baiak iniciou o curso na Make Music Now, produzindo sua primeira track Curioso...',
      canonical: 'https://guildstudios.com.br/curioso',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'produtor,dj,tibia,ali sul,mkmn,game server'
        }
      }
    };
    return(
      <DocumentMeta {...meta}>
      <>
      <h1 style={{textAlign: "right"}}><i>"Comendo o cu de curioso"<br />The Game</i></h1>
      <h3 style={{textAlign: "right"}}>Até parece...</h3>
      </>
      </DocumentMeta>
    )
  }
}

export default Vai
