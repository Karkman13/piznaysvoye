import React from 'react';

interface Iprops{
  bgcolor: string,
  completed: number,
  ishidden: boolean
}

const ProgressBar = (props:Iprops) => {
    const { bgcolor, completed, ishidden} = props;
  
    const containerStyles = {
      height: 20,
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 10
    } as React.CSSProperties
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'center',
      transition: 'width 0.5s ease-in-out'
    } as React.CSSProperties
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    } as React.CSSProperties
  
    return (
      <div style={containerStyles} hidden={ishidden}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;