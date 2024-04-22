import styled from "styled-components";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const Label = styled.label`
  width: 60px;
  height: 30px;
  position: relative;
  display: block;
  background: #ebebeb;
  border-radius: 200px;
  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: 0.3s;

  &::after {
    content: "";
    width:26px;
    height: 26px;
    position: absolute;
    top:2px;
    left:2px;
    background: linear-gradient(180deg,#ffcc89,#d8860b);
    border-radius: 20px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
    transition: 0.3s;
  }

  &:active::after {
    width: 50px;
  }

  .sun {
    position: absolute;
    width: 20px;
    top: 5px;
    left: 5px;
    z-index: 100;
    color: #fff;
    transition: 0.3s;
  }

  .moon {
    position: absolute;
    width: 30px;
    top: 3px;
    right: 1px;
    z-index: 100;
    color: #7e7e7e;
    transition: 0.3s;
  }


`;

const Input = styled.input`
    width: 0;
    height: 0;
    visibility: hidden;

    &:checked + label {
        background-color: #242424;
    }

    &:checked + label::after {
        left: 56px;
        transform: translateX(-100%);
        background: linear-gradient(180deg,#777,#3a3a3a);
    }

    &:checked + label .sun {
        color: #7e7e7e;
    }

    &:checked + label .moon {
        color: #fff;
    }
`

const Toggle = styled.div`
    display: flex;

`

function ThemeToggle({setDarkMode, darkMode}) {
    const toggleTheme = (e) => {
        setDarkMode(e.target.checked)
        localStorage.setItem('theme', e.target.checked)
    }
  return (
    <Toggle>
      <Input checked={darkMode} onChange={toggleTheme} type="checkbox" id="theme-toggle" />
      <Label htmlFor="theme-toggle">
        <WbSunnyOutlinedIcon className="sun" />
        <DarkModeOutlinedIcon className="moon" />
      </Label>
    </Toggle>
  );
}

export default ThemeToggle;
