import MyDiv from '../MyDiv';
import './App.css';
import { useState, createContext, useEffect } from 'react';
import DetailsInput from '../components/DetailsInput';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import Counter from '../components/Counter';
import { useSelector } from 'react-redux';
import { fetchUserInfo, setDataAction, setErrorAction, setLoadingAction } from '../reducers/userInfo';
import { useLoaderData, useRouteLoaderData, useSearchParams } from 'react-router-dom';


const MyAppContext = createContext();

function App() {

  const [userInfo, setUserInfo] = useState('myuser');   
  const details = useRouteLoaderData('base') || [];
  

  const loading = useSelector((state) => {
    return state.userInfo.loading;
  });

  const error = useSelector((state) => {
    return state.userInfo.error;
  });

  // const details = useSelector((state) => {
  //   return state.userInfo.data;
  // });

  const [params, setParams] = useSearchParams();



  const isActiveState = params.get('state');



  function handleDelete (id) {
    // const newArr = details.filter((item) =>  item.id !== id);
    // setDetails(newArr);
  }

  function handleSubmit(item) {

    // const newDetails = [...details, {
    //   title: item.title,
    //   subtitle: item.subTitle,
    //   id: 'newId' + details.length,
    //   isActive: item.isActive
    // }];

    // setDetails(newDetails);
  }

  function handleActiveChange(id, isActive) {
    // const newState = details.map((item) => {
    //   if(item.id === id) {
    //     return {...item, isActive: isActive};
    //   }
    //   return item;
    // });
    // setDetails(newState);
    // setUserInfo('NRE USER');
  }

  return (
      <div className='App' id="aaaa">
        {
          error && <div>{error}</div>
        }
        {
          loading && <div>LOADING .... </div>
        }
    
        
        <PageHeader />

        <select name="activeState" onChange={(evt) => {
          setParams({
            state: evt.target.value
          });
        }}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="nonactive">Non Active</option>
        </select>
        <DetailsInput  onSubmit={handleSubmit}/>
        <Container>
          <Counter />
          {
              details
                .filter((item) => {
                    if(isActiveState === 'all' || !isActiveState) {
                      return true;
                    }
                    if(isActiveState === 'active') {
                      return item.isActive === true;
                    }

                    if(isActiveState === 'nonactive') {
                      return !item.isActive;
                    }
                })
                .map((item, index) => {
                return (
                  <MyAppContext.Provider value={userInfo} key={index}>
                    <MyDiv
                      title={item.title}
                      subtitle={item.subtitle}
                      isActive={item.isActive}
                      id={item.id}
                      disabled={index === details.length - 1 ? true : false}
                      onDelete={handleDelete}
                      onActiveChange={handleActiveChange}
                    />
                  </MyAppContext.Provider>
                );
              })
          }
      </Container>
      </div>
  );
}

export default App;

export {
  MyAppContext
}
