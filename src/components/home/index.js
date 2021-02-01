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
  Main,
  Chart,
  ChartContainer
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
import { Line, Doughnut, Bar } from 'react-chartjs-2';

function Home() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'],
      datasets: [
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

  useEffect(() => {
    chart()
  }, []);

  return (
    <Container>
      <Aside>
        <LogoFielder>
          <img src={Logo} alt='logo' />

        </LogoFielder>

        <Icones>
          <IconContext.Provider value={{ color: '#969CBA', size: '20px' }}>
            <div>
              <AiFillFolderOpen title='Document' /><small>Document</small>
            </div>
            <div>
              <AiOutlineBarChart title='Charts and Reports' /><small>Charts and Reports</small>
            </div>
            <div>
              <AiOutlineMail title='Emails' /><small>Emails</small>
            </div>
            <div>
              <BiPaste title='Calls' /><small>Calls</small>
            </div>
            <div>
              <BsGear title='Configuration' /><small>Configuration</small>
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

        <ChartContainer>
          <Chart>
            <Line data={chartData} options={{
              responsive: true
            }} />
          </Chart>

          <Chart>
            <Doughnut data={chartData} options={{
              responsive: true
            }} />
          </Chart>

          <Chart>
            <Bar data={chartData} options={{
              responsive: true
            }} />
          </Chart>

        </ChartContainer>

      </Main>
    </Container>
  );
}

export default Home;
