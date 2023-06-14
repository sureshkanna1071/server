Name: Suresh Kanna P
Project: Baskin Robbins

Page 1

1. List of new products.
https://baskinrserver.onrender.com/menu/new

2. List of shopping ranges.
https://baskinrserver.onrender.com/ranges

3. List of all time favorite items.
https://baskinrserver.onrender.com/menu/fav

4. List of blogs.
https://baskinrserver.onrender.com/blogs

5. Subscribe to news letter.
https://baskinrserver.onrender.com/newsletter

post ?email=test111@gmail.com&status=active

6. Unsubscribe to news letter.
https://baskinrserver.onrender.com/newsletter

post ?email=test111@gmail.com&status=unsubscribed

page 2 (store detils)

1. List of shopping ranges.
https://baskinrserver.onrender.com/ranges

2. List of stores.
https://baskinrserver.onrender.com/shops

page 3  (shopping page)

1. List of shopping ranges.
https://baskinrserver.onrender.com/ranges

2. List of menu items with respect to selected rangeId
https://baskinrserver.onrender.com/menu/1

3. Filter the items that are vegetarian.
https://baskinrserver.onrender.com/menu/veg

3. Add items to users cart.
https://baskinrserver.onrender.com/cart

put {email, id}

page 4 (order page)

1. Details of items in cart.
https://baskinrserver.onrender.com/cart

post {ids: []}

2. Update the items in the cart.
https://baskinrserver.onrender.com/cart

put {email: "", Ids: []}

3. Place the order.
https://baskinrserver.onrender.com/order

post {email:"", status: "pending"}

4. Update the status of order.
https://baskinrserver.onrender.com/order

put {email: "", name: "status", value: "Delivered"}

