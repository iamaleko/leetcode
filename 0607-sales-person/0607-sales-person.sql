-- select name from SalesPerson left join (
--   select distinct sales_id from Orders left join Company using(com_id) where name = "RED"
-- ) sub using(sales_id) where sub.sales_id is null

select name from SalesPerson where sales_id not in (
  select distinct sales_id from Orders left join Company using(com_id) where name = "RED"
)