import React from "react";
import Container from "../components/Container";
import Products, { IProductList } from "../components/Products";
import Link from "next/link";

// const data = [
//   {
//     id: "1",
//     title: " Product 1",
//     price: 30,
//     image:
//       "https://m.media-amazon.com/images/I/71r1BLOWnkL._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     id: "2",
//     title: " Product 2",
//     price: 10,
//     image:
//       "https://media.istockphoto.com/id/510693044/photo/house-cleaning-product-on-wood-table.jpg?s=612x612&w=0&k=20&c=EZfeRCDgSMPnqG684zQBOqyNfDGx9JWTXS1Q2Lhrjy4=",
//   },
//   {
//     id: "3",
//     title: " Product 3",
//     price: 20,
//     image:
//       "https://t3.ftcdn.net/jpg/01/91/32/34/360_F_191323402_W2ATUPr8dGHALHrvyX4WVlEDz4qXmmd9.jpg",
//   },
//   {
//     id: "4",
//     title: " Product 4",
//     price: 100,
//     image:
//       "https://a-static.besthdwallpaper.com/colorful-cartoon-design-with-open-door-and-household-items-wallpaper-1152x768-102826_36.jpg",
//   },
//   {
//     id: "5",
//     title: " Product 5",
//     price: 80,
//     image:
//       "https://plus.unsplash.com/premium_photo-1683133958062-12afa652a4fb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww",
//   },
//   {
//     id: "6",
//     title: " Product 6",
//     price: 5,
//     image:
//       "https://t3.ftcdn.net/jpg/06/06/15/56/360_F_606155606_rFYHJP0uKgPNdpT3NoDbucxp0h38rlWb.jpg",
//   },
// ];

interface IStoreProduct {
  params: Promise<{}>;
  searchParams: Promise<{ page: string; perpage: string }>;
}

async function Store(:searchParams}: IStoreProduct) {
  const result = await fetch(
    "http://localhost:3004/products?_page=1&_per_page=5"
  );
  const data = (await result.json()) as IProductList;
  console.log(data);

  return (
    <Container>
      <div className="grid grid-cols-3 gap-2 mt-20 mb-20 ">
        {data.data.map((item) => (
          <Link href={`/store/${item.id}`} key={item.id}>
            <Products {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}
export default Store;
