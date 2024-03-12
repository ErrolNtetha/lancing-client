/* eslint-disable react/jsx-key */

import React from "react";
import { VendorComponent } from "./vendorComponent";
import { NoContent } from "../../molecules/noContent";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const ListVendors = () => {
    const [allList, setAllLists] = React.useState<any>([]);
    const names = { firstName: 'Mphumeleli', lastName: 'Ntetha' };

    React.useEffect(() => {
        const q = query(collection(db, 'lists'))

        async function getLists() {
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                setAllLists([{ ...doc.data(), id: doc.id }]);
            });
        }

        getLists();
    }, []);

	return (
		<React.Fragment>
            {!allList.length
                ? (
                    <section className='h-[92vh]'> 
                        <NoContent main='No freelancers found yet.' body='Once freelancers are available, they will appear here.' />
                    </section>
                )
                : allList.map((v: any) => <VendorComponent key={v.id} {...v} names={names} />)}
		</React.Fragment>
	);
};
