export const ChangeColor = ({colors}) => {
    const buttonStyle = {
        backgroundColor: colors === 'primary' ? 'blue' : 'red',
        color: 'white',
        margine: '20px',
        padding: '20px',
        border: 'none'
    };

    return <>
        <button style={buttonStyle} >
            click for change color
        </button>
    </>
}
