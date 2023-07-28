/* eslint-disable react/jsx-key */

import React from "react";
import { VendorComponent } from "./vendorComponent";
import { v4 as uuidv4 } from "uuid";
import { vendors } from "./vendors";

export const ListVendors = () => {
	return (
		<React.Fragment>
			{vendors.map((vendor) => (
				<VendorComponent key={uuidv4()} {...vendor} />
			))}
		</React.Fragment>
	);
};
