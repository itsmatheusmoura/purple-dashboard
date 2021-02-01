import React, { useState, useEffect } from 'react';
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
  ButtonContainer,
  Main
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
import { FaBars } from 'react-icons/fa';
import { Line, Doughnut, Bar } from 'react-chartjs-2';

function Home() {

  const [sidebar, setSidebar] = useState(false);
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'],
      datasets:[
        {
          label: 'Dias da semana',
          data: [32, 24, 40, 120, 25, 19, 10],
          backgroundColor: [ 
            'rgba(75, 192, 192,  0.6)',
            'rgba(20, 132, 192,  0.6)',
            'rgba(75, 142, 192,  0.6)',
            'rgba(40, 112, 192,  0.6)',
            'rgba(75, 192, 192,  0.6)',
            'rgba(72, 122, 192,  0.6)',
            'rgba(50, 152, 192,  0.6)',
          ]
        }
      ],
      borderWidth: 4
    });
  };

  const showSideBar = () => {
    setSidebar(!sidebar);
    console.log('Funcionando');
    console.log(sidebar);
  }

  useEffect(() => {
    chart()
  }, []);

  return (
      <Container>
          <Aside statusSideBar={sidebar}>
            <LogoFielder>
              <img src={Logo} alt='logo' />
            </LogoFielder>
  
            <Icones>
              <IconContext.Provider value={{ color: '#969CBA', size: '20px' }}>
              <div>
                <FaBars onClick={showSideBar} />
              </div>
                <div>
                  <AiFillFolderOpen title='Documentos'/><small>Documentos</small>
                </div>
                <div>
                  <AiOutlineBarChart title='Graficos e Relatórios'/><small>Graficos e Relatórios</small>
                </div>
                <div>
                  <AiOutlineMail title='Emails'/><small>Emails</small>
                </div>
                <div>
                  <BiPaste title='Chamadas'/><small>Chamadas</small>
                </div>
                <div>
                  <BsGear title='Ajustes'/><small>Ajustes</small>
                </div>
              </IconContext.Provider>
            </Icones>
          </Aside>
        
        <Main>
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

          {/* <div style={{ height: "200px", width: "500px"}}>
            <Line data={chartData} options={{
              responsive: true
            }}/>

            <Doughnut data={chartData} options={{
              responsive: true
            }}/>

            <Bar data={chartData} options={{
              responsive: true
            }}/>
          </div>  */}
        </Main>
      </Container>
  );
}

export default Home;
