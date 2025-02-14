type ProductOfNumbers struct {
  Nums []int
  ZeroIndex int
  LastIndex int
}

func Constructor() ProductOfNumbers {
  return ProductOfNumbers{ ZeroIndex: -1, LastIndex: -1 }
}
func (this *ProductOfNumbers) Add(num int)  {
  if num == 0 {
    this.ZeroIndex = this.LastIndex + 1
    this.Nums = append(this.Nums, 0)
  } else if this.LastIndex >= 0 {
    if this.LastIndex == this.ZeroIndex {
      this.Nums = append(this.Nums, num)
    } else {
      this.Nums = append(this.Nums, num * this.Nums[this.LastIndex])
    }
  } else {
    this.Nums = append(this.Nums, num)
  }
  this.LastIndex++
}
func (this *ProductOfNumbers) GetProduct(k int) int {
  dividerIndex := this.LastIndex - k
  // stream is empty
  if this.LastIndex < 0 {
    return 0
  }
  // all stream is requested
  if dividerIndex < 0 {
    if this.ZeroIndex == -1 {
      return this.Nums[this.LastIndex]
    }
    return 0
  }
  // stream part is requested
  if this.ZeroIndex > dividerIndex {
    return 0
  }
  if this.ZeroIndex == dividerIndex {
    return this.Nums[this.LastIndex]
  }
  return this.Nums[this.LastIndex] / this.Nums[dividerIndex]
}
