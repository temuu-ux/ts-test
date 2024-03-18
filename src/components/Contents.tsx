type Contents = {
  name: string;
  price: number;
  isVerified: boolean;
};

export const Contents=({con}:{con:Contents})=>{
    return(
        <div>
            {con.price}
        </div>
    )
}
