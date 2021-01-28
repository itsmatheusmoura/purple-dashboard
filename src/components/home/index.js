import {
  Container,
  Aside,
  SearchBar,
  IndicatorsBox,
  ProfileBar,
  SearchForm,
  Username,
  Login,
  UserAvatar,
  User,
  LogoFielder,
  Icones,
  TitleContainer,
  Title,
  ButtonContainer
} from './styles';
import Logo from '../../assets/logo.svg';
import { AiFillFolderOpen } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdExitToApp } from 'react-icons/md';
import Indicator from '../indicators';
import Avatar from '../../assets/avatar.svg';
import { IconsIndicatorData } from '../../icons';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineBarChart } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPaste } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { BiPencil } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

function Home() {
  return (
    <Container>

      <Aside>
        <LogoFielder>
          <img src={Logo} alt='logo' />
        </LogoFielder>

        <Icones>
          <IconContext.Provider value={{ color: '#969CBA', size: '20px' }}>
            <AiFillFolderOpen />
            <AiOutlineBarChart />
            <AiOutlineMail />
            <BiPaste />
            <BsGear />
          </IconContext.Provider>
        </Icones>

      </Aside>

      <SearchBar>
        <SearchForm>
          <button><AiOutlineSearch color='#C9CED6' size={20} /></button>
          <input placeholder='Search...' />
        </SearchForm>

        <ProfileBar>
          <User>
            <div>
              <Username>
                Cody Simmons
              </Username>

              <Login>
                Lecturer
              </Login>
            </div>

            <UserAvatar>
              <img src={Avatar} alt='avatar' />
            </UserAvatar>
          </User>

          <MdExitToApp size={20} color='#C9CED6' id='icon' />
          <IoMdNotificationsOutline size={20} color='#C9CED6' id='icon' />

        </ProfileBar>
      </SearchBar>

      <TitleContainer>
        <Title>
          <h1>Dashboard</h1>
          <p>Mobile UX/UI Design course</p>
        </Title>

        <ButtonContainer>
          <button><BiPencil />Manage dashboard</button>
          <button><AiOutlinePlus />Create new dashboard</button>
        </ButtonContainer>

      </TitleContainer>

      <IndicatorsBox>
        {
          IconsIndicatorData.map((item) => (
            <Indicator key={Math.random()} value={34} legend={item.title} icon={item.icon} />
          )
          )
        }
      </IndicatorsBox>

    </Container>
  );
}

export default Home;
