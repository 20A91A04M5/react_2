
import prod from "./Pro";

function Prods(){
    
    return (
        <>
        {prod.map((e)=>{
            return (
                    <>
                    <div id={e.id} style={{border:"3px groove blue",padding:"10px"}}>
                    <b style={{color:"red",fontSize:"30px"}}>{e.id}</b>&emsp;
                    <strong style={{color:"blue",fontSize:"25px"}}>{e.category}</strong> <br />
                    <img style={{height:"250px",width:"250px"}} src={e.image} alt=""/>
                    <p style={{width:"250px",textAlign:"center",height:"200px",overflow:"scroll",cursor:"pointer",overflowX:"hidden",overflowY:"unset"}}>Desc:{e.description}</p>
                    <b style={{color:"green",fontSize:"20px",paddingLeft:"20%"}}> <span>Price:</span>  {e.price} ₹</b>
                    </div>
                    </>
                )
        })}
        {/* <h1>Products</h1> */}
        
        </>
    )
}
export default Prods