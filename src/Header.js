import React, { Component } from 'react';

class Header extends Component {
  render() {
    const logged = this.props.email ? <span>{this.props.email} </span> : <span> Inicia sesión</span> ;
    const buttons = this.props.buttons.map((button, key) => {
      return (
        <li className='nav-item'>
          <button type='button' className='btn btn-primary' style={{ backgroundColor: '#Ff8326' }} key={key} onClick={() => this.props.handler({ type: 'filter', title: button.name, id: button.id, options: button.filters })}>{button.name}</button>
        </li>
      );

    });
    return (
      <header>
        <nav className='navbar navbar-color-on-scroll fixed-top navbar-expand-lg' style={{ backgroundColor: '#Ff8326' }}>
          <div className='container' style={{ backgroundColor: '#Ff8326' }}>
            <div className='navbar-translate'>
              <a className='navbar-brand' href='/'>
              <img src={process.env.PUBLIC_URL + 'assets/img/logo.png'} />
                {this.props.title}
                </a>
              <button className='navbar-toggler' type='button' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='navbar-toggler-icon'></span>
                <span className='navbar-toggler-icon'></span>
                <span className='navbar-toggler-icon'></span>
              </button>
            </div>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav ml-auto'>
                {buttons}
                <li className='nav-item'>

                  <form className="form-inline ml-auto nav-item">
                    <div className="form-group has-black">
                      <input type="text" className="form-control" placeholder="Buscar" />
                    </div>
                    <span className="btn btn-black btn-raised btn-fab btn-round">
                      <i className="material-icons">search</i>
                    </span>
                  </form>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' onClick={() => this.props.handler({ type: 'help', title: 'Plataforma de Iniciativas Ciudadanas', subtitle: '¿QUÉ INICIATIVAS CIUDADANAS HAY EN TU BARRIO?, ¿PARTICIPAS EN ALGUNA?, ¿QUIERES DARLA A CONOCER?', description: 'El objetivo de este proyecto es mostrar la ciudad de Málaga desde una perspectiva social de movimientos emergentes,iniciativas vecinales, nuevas tendencias urbanas dentro de sus barrios, dar a conocer esa realidad social -con poca visibilidad en la ciudad- además de crear una red de colectivos y asociaciones,y establecer posibles sinergias.' })}>
                    <i className='material-icons'>help</i>
                  </a>
                </li>
                <li className='nav-item'><a className='nav-link' onClick={() => this.props.handler({ type: 'login', title: 'Accede o crea tu cuenta' })}><i className='material-icons'>person</i>{logged}</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;