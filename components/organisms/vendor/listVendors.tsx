/* eslint-disable react/jsx-key */

import React from "react";
import { VendorComponent } from "./vendorComponent";
import { v4 as uuidv4 } from "uuid";
import { useFetchVendors } from "../../../hooks/useFetchVendors";
import { NoContent } from "../../molecules/noContent";

export const ListVendors = () => {
    const v: any = useFetchVendors();

	return (
		<React.Fragment>
            {!v.length
                ? <NoContent main='No freelancers found yet.' body='Once freelancers are available, they will appear here.' />
                : v.map((v: any) => <VendorComponent key={uuidv4()} {...v} {...v.vendor} />)}
		</React.Fragment>
	);
};
