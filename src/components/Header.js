import {useSelector} from 'react-redux';
const Header = () => {
    const result = useSelector((state)=> state.cartData);
    // console.warn('redux data in header: ', result);

    const styleImage = {
      height: "50px",
    };
    const cartCount = {
        position: "absolute",
        top: "18px",
        right: "52px",
        height: "26px",
        width: "26px",
        backgroundColor: "black",
        borderRadius: "19px",
        fontSize: "23px",
        fontWeight: 600,
        color: "white"
    };

    return (
        <div className='header'>
            <div className='cart-div'>
                <span style={cartCount}>{result.length}</span>
                <img src='https://cdn-icons-png.flaticon.com/512/263/263142.png' alt='ImagePreview' style={styleImage}/>
            </div>
        </div>
    );
}

export default Header;