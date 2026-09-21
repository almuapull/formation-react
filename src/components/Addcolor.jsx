export const AddcolorChanger = ({color}) => {
    const buttonStyle = {
        background: color === 'primary' ? 'blue' : 'red',
        color: 'white',
        margin: '20px' ,
        padding:'10px 20px',
        borderRadius: '5px'
    };

    return <>
        <button style={buttonStyle}>
            button {color === 'primary' ? 'blue' : 'rouge'}
        </button>
    </>
}