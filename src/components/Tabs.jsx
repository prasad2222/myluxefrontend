import MuiTabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const Tabs = ({ Tabvalues, value, onChange }) => {

  const handleChange = (event, newValue) => {
    console.log("Selected in Tab:", newValue);
    onChange(event, newValue); // pass up

  };

  return (
    <MuiTabs value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            textColor="gray"
            indicatorColor="primary"
            sx={{
              marginTop: '20px',
              '& .MuiTabs-flexContainer': {
                justifyContent: 'flex-start'
              }
            }}>
      {Tabvalues.map((tab) => (
        <Tab key={tab.value} value={tab.value} label={tab.label} />
      ))}
    </MuiTabs>
  );
};