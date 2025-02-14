type ProductOfNumbers struct {
  Nums []int
  ZeroIndex int
}

func Constructor() ProductOfNumbers {
  return ProductOfNumbers{ ZeroIndex: -1 }
}
func (this *ProductOfNumbers) Add(num int)  {
  if num == 0 {
    this.ZeroIndex = len(this.Nums)
    this.Nums = append(this.Nums, 0)
  } else if len(this.Nums) > 0 {
    if this.Nums[len(this.Nums)-1] == 0 {
      this.Nums = append(this.Nums, num)
    } else {
      this.Nums = append(this.Nums, num * this.Nums[len(this.Nums)-1])
    }
  } else {
    this.Nums = append(this.Nums, num)
  }
}
func (this *ProductOfNumbers) GetProduct(k int) int {
  lastIndex := len(this.Nums) - 1
  dividerIndex := len(this.Nums) - k - 1
  // stream is empty
  if lastIndex < 0 {
    return 0
  }
  // all stream is requested
  if dividerIndex < 0 {
    if this.ZeroIndex == -1 {
      return this.Nums[lastIndex]
    }
    return 0
  }
  // stream part is requested
  if this.ZeroIndex > dividerIndex {
    return 0
  }
  if this.ZeroIndex == dividerIndex {
    return this.Nums[lastIndex]
  }
  return this.Nums[lastIndex] / this.Nums[dividerIndex]
}
