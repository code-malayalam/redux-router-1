import logo from './logo.svg';
import MyDiv from './MyDiv';
import './App.css';
import { useState, createContext, useEffect } from 'react';
import DetailsInput from './components/DetailsInput';
import PageHeader from './components/PageHeader';
import Container from './components/Container';
import Counter from './components/Counter';

import { Provider } from 'react-redux';
import store from './reducers/store';

const MyAppContext = createContext();

function App() {

  const [details, setDetails] = useState([]);
  const [userInfo, setUserInfo] = useState('myuser');   

  useEffect(() => {

    // Loading true...
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        console.log('*****', data);
        setDetails(data);
        // Loading false...
        // Show data
      })
      .catch((err) => {
          // Loading false...
          // Show error
      })
  }, []);

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
    <Provider store={store}>
      <div className='App' id="aaaa">
        <PageHeader />
        <DetailsInput  onSubmit={handleSubmit}/>
        <Container>
          <Counter />
          {
              details.map((item, index) => {
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
    </Provider>
  );
}

export default App;

export {
  MyAppContext
}
