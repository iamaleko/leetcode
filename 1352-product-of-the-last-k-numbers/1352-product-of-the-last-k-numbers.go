type ProductOfNumbers struct {
  Nums []int
  Zero []int
}

func Constructor() ProductOfNumbers {
  return ProductOfNumbers{}
}
func (this *ProductOfNumbers) Add(num int)  {
  if num == 0 {
    this.Zero = append(this.Zero, len(this.Zero))
    this.Nums = append(this.Nums, 0)
  } else if len(this.Nums) > 0 {
    this.Zero = append(this.Zero, this.Zero[len(this.Zero)-1])
    if this.Nums[len(this.Nums)-1] == 0 {
      this.Nums = append(this.Nums, num)
    } else {
      this.Nums = append(this.Nums, num * this.Nums[len(this.Nums)-1])
    }
  } else {
    this.Zero = append(this.Zero, -1)
    this.Nums = append(this.Nums, num)
  }
}
func (this *ProductOfNumbers) GetProduct(k int) int {
  lastIndex := len(this.Nums) - 1
  dividerIndex := len(this.Nums) - k - 1
  // fmt.Println(">", k, dividerIndex, lastIndex)
  // fmt.Println(this.Zero)
  // fmt.Println(this.Nums)
  // stream is empty
  if lastIndex < 0 {
    return 0
  }
  // all stream is requested
  if dividerIndex < 0 {
    if this.Zero[lastIndex] == -1 {
      return this.Nums[lastIndex]
    }
    return 0
  }
  // stream part is requested
  if this.Zero[lastIndex] > dividerIndex {
    return 0
  }
  if this.Zero[lastIndex] == dividerIndex {
    return this.Nums[lastIndex]
  }
  // fmt.Println(this.Nums[lastIndex], this.Nums[dividerIndex])
  return this.Nums[lastIndex] / this.Nums[dividerIndex]
}


/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Add(num);
 * param_2 := obj.GetProduct(k);
 */

//  [1, 1*2, 1*2*0, 1*2*0*3, 1*2*0*3*4]
//  [1, 2,   0,     0,       0]
//  [1, 2,   0,     3,       12]
