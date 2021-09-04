const ADD_NEW = "INSERT INTO sales (name,description,amount) VALUES ($1,$2,$3)"
const SELECT_ALL = "SELECT * FROM sales"
const DAILY_QUERY = "select extract(hour from date) as daily ,sum(amount) as amount from sales where date is not null group by extract(hour from date) order by daily asc"
const WEEKLY_QUERY = "select extract(week from date) as weekly ,sum(amount) as amount from sales where date is not null group by extract(week from date) order by weekly asc"
const MONTHLY_QUERY = "select extract(month from date) as monthly ,sum(amount) as amount from sales where date is not null group by extract(month from date) order by monthly asc"
module.exports = {
    ADD_NEW,
    DAILY_QUERY,
    WEEKLY_QUERY,
    MONTHLY_QUERY,
    SELECT_ALL
}