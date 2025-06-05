class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    // Filter
    filter() {
        const queryObj = { ...this.queryString };
        const excludedFields = ['sort', 'page', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el]);

        const mongoQuery = {};

        Object.keys(queryObj).forEach(key => {
            if (key.includes('[')) {
                // Example: duration[gte] => duration and gte
                const [field, operator] = key.split(/\[|\]/).filter(Boolean);
                if (!mongoQuery[field]) mongoQuery[field] = {};
                mongoQuery[field][`$${operator}`] = Number(queryObj[key]);
            } else {
                mongoQuery[key] = queryObj[key];
            }
        });

        console.log('Parsed Filter:', mongoQuery);
        this.query = this.query.find(mongoQuery);
        return this;
    }


    // Sort
    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ')
            console.log(sortBy)
            this.query = this.query.sort(sortBy)
        } else {
            this.query = this.query.sort("-createdAt")
        }
        return this;
    }

    // Limit fields
    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(" ")
            this.query = this.query.select(fields)
        } else {
            this.query = this.query.select("-__v")
        }
        return this;
    }

    // Pagination
    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 100;
        const skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit)
        return this
    }
}

module.exports = APIFeatures;