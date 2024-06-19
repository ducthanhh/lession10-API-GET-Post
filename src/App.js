import './App.css';
import nldtCategoryList from './componets/nldtCategoryList.js';
import { useEffect, useState } from 'react';
import axios from './api/nldtApi.js';
import nldtCategoryFrom from './componets/nldtCategoryForm.js';

function App() {
  const [nldtCategories, setnldtCategories] = useState([]);
  
  const getCategories = async () => {
    try {
      const nldtResponse = await axios.get("nldtCategory");
      setnldtCategories(nldtResponse.data);  
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const [nldtCategoryIsFrom, setnldtCategoryIsFrom] = useState(false);

  const nldtHandleAddNew = (param) => {
    setnldtCategoryIsFrom(param);

  }

  const nldtHandleCategoryCloseForm = (param) => {
    setnldtCategoryIsFrom(param);
  }

  const nldtHandleCategorySubmit = (param) => {
    let id = nldtCategories[nldtCategories.length - 1].nldtId;
    console.log("ma: ", id);
    param.nldtId = id + 1;
    nldtCategories.push(param);
    setnldtCategories((prev) => {
      return [...prev];
    })
    setnldtCategoryIsFrom(false);
  }

  return (
    <div className="container border my-3">
      <h1>Trương Đình Tuyển Call API</h1>
      <nldtCategoryList rendernldtCateGories={nldtCategories} onAddNew={nldtHandleAddNew} />
      <hr />
      {
        nldtCategoryIsFrom === true ? <nldtCategoryFrom onCloseForm={nldtHandleCategoryCloseForm} onCategorySubmit={nldtHandleCategorySubmit} /> : ""
      }
      
    </div>
  );
}

export default App;import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;


