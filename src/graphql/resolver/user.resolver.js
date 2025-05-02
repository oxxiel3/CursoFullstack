const userResolver = {
    Query: {
        // Fix this, id is a property of the id (input)
        async user(_parent, params, context) {
            console.log("PARENT", _parent);
            console.log("PARAMS", params);
            console.log("CONTEXT", context);
            return {
                id: "-99e2-6238800fda32",
                name: "Jhon",
                surname: "Hess",
                email: "jhess@gmail.com",
                dpi: "123456789",
                nit: "123456789",
                phone: "123456789",
                id: "c4132717-4ba3-478a-99e2-6238800fda32",
                name: "Bike 2",
                brand: "Honda",
                model: "CBR1000",
            }

            /*  const { User } = db;
             const user = await db.User.findOne({ where: { id: "c4132717-4ba3-478a-99e2-6238800fda32" } });
             return user; */
        },
    },

};

export { userResolver };