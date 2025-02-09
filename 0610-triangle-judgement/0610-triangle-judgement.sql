-- select x, y, z, if(x<y+z and y<x+z and z<y+x, "Yes", "No") as triangle from Triangle
select x, y, z, if(greatest(x,y,z) < least(x+y, y+z, z+x), "Yes", "No") as triangle from Triangle