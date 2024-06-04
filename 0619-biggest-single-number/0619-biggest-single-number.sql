-- select max(num) num from (select num, count(1) cnt from MyNumbers group by num) sub where cnt = 1

select coalesce(
  (select num from MyNumbers group by num having count(1) = 1 order by num desc limit 1),
  null
) num