import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CalculatorTab from './CalculatorTab/CalculatorTab';


const Calculator = () => {
    const [activeTab,setActiveTab] =  useState(0)
   const data = [
    {
        id:0,
        name:'Click & Collect'
    },
    {
        id:1,
        name:'Click & Sell'
    }
   ]


    return (
        <div className="flex flex-col max-w-[350px]">
             <Tabs >
    <TabList className='flex rounded-t-lg'>
        {
            data.map((item,ind) => <Tab style={{
                borderRadius: activeTab == ind ? '8px 0 0 0 ':'0 8px 0 0',
            }} className={`bg-white text-[#1E4A9A] border-none outline-none  rounded-tl-lg  sm:px-9 sm:py-4 px-5 py-4 `} key={item.id}>{item.name}</Tab>)
        }
      

    </TabList>

    <TabPanel>
      <CalculatorTab></CalculatorTab>
    </TabPanel>
    <TabPanel>
    <CalculatorTab></CalculatorTab>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Calculator;