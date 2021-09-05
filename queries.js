const ADD_NEW = "INSERT INTO sales (name,description,amount,date) VALUES ($1,$2,$3,$4)"
const SELECT_ALL = "SELECT * FROM sales"
const DAILY_QUERY = "select to_char(date,'DD-MM-YYYY hh') as daily ,sum(amount) as amount from sales where date is not null group by daily order by daily asc"
const WEEKLY_QUERY = "select to_char(date,'DD-MM-YYYY W') as weekly ,sum(amount) as amount from sales where date is not null group by weekly order by weekly asc"
const MONTHLY_QUERY = "select to_char(date,'DD-MM-YYYY Mon') as monthly ,sum(amount) as amount from sales where date is not null group by monthly order by monthly asc"
module.exports = {
    ADD_NEW,
    DAILY_QUERY,
    WEEKLY_QUERY,
    MONTHLY_QUERY,
    SELECT_ALL
}