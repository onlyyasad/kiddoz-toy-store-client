import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const SubCategory = () => {
    return (
        <div>
            <h2>This is Category Area</h2>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>All Cars</Tab>
                        <Tab>Sports Car</Tab>
                        <Tab>Regular Car</Tab>
                        <Tab>Truck</Tab>
                    </TabList>
                    <TabPanel>
                        <h2>All Cars Content Here</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Sports Car Content Here</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Regular Car Content Here</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Truck Content Here</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default SubCategory;