export default function Orders() {
    return (
        <>
            <div className="flex border">
                <div>
                    <th>Order</th>
                    <tr>#6523</tr>
                    <tr>#6523</tr>
                    <tr>#6523</tr>
                    <tr>#6523</tr>
                    <tr>#6523</tr>
                </div>

                <div className="ps-14">
                    <th>Date</th>
                    <tr>September 10, 2020</tr>
                    <tr>September 10, 2020</tr>
                    <tr>September 10, 2020</tr>
                    <tr>September 10, 2020</tr>
                    <tr>September 10, 2020</tr>
                </div>

                <div className="ps-14">
                    <th>Status</th>
                    <tr>Processing</tr>
                    <tr>On Hold</tr>
                    <tr>Processing</tr>
                    <tr>Processing</tr>
                    <tr>Processing</tr>
                </div>
                
                <div className="ps-14">
                    <th>Total</th>
                    <tr>$326.63 for 3 items</tr>
                    <tr>$326.63 for 3 items</tr>
                    <tr>$326.63 for 3 items</tr>
                    <tr>$326.63 for 3 items</tr>
                    <tr>$326.63 for 3 items</tr>
                </div>

                <div className="ps-14">
                    <th>Action</th>
                    <tr><button className="border h-10 w-20">View</button></tr>
                    <tr><button className="border h-10 w-20">View</button></tr>
                    <tr><button className="border h-10 w-20">View</button></tr>
                    <tr><button className="border h-10 w-20">View</button></tr>
                    <tr><button className="border h-10 w-20">View</button></tr>
                </div>
            </div>
        </>
    )
}