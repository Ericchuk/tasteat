export default function CartFooter(){

    const lists = [
        {
            id:0,
            title:'Discount',
        },
        {
            id:1,
            title:'Subtotal',
        },
    ]

    const list = lists.map((item) => {
        return(
            <aside key={item.id}>
                <p>{item.title}</p>
                <b></b>
            </aside>
        )
    })
    return(
        <footer>
            {list}
            <main>
                <button>Go back</button>
                <button>Continue to Payment</button>
            </main>
        </footer>
    )
}