import './AppHeader.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {

  return (
    <header className='p-4 app-header'>
      <div className='app-header__content'>
        <div className='app-header__button-block'>
          <button style={{ backgroundColor: 'inherit', color: 'rgba(242, 242, 243, 1)' }} className='p-5 app-header__button'>
            <BurgerIcon type="primary" />
            <p className="p-2 text text_type_main-small">Конструктор</p>
          </button>
          <button style={{ backgroundColor: 'inherit'}} className='p-5 app-header__button'>
            <ListIcon type="secondary" />
            <p className="p-2 text text_type_main-small text_color_inactive">Конструктор</p>
          </button>
        </div>
        <Logo />
        <button style={{ backgroundColor: 'inherit' }} className='p-5 app-header__button'>
          <ProfileIcon type="secondary" />
          <p className="p-2 text text_type_main-small text_color_inactive">Конструктор</p>
        </button>
      </div>
    </header>
  )
}

export default AppHeader;