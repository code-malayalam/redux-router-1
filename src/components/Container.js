import './Container.css';
function Container(props) {
    const {
        title,
        children
    } = props;


    return (
        <div className="Container">
            {children}
        </div>
    );
}

export default Container;