class Solution:
  def findAllRecipes(self, recipes: List[str], ingredients: List[List[str]], supplies: List[str]) -> List[str]:
    supplies = set(supplies)
    recipes = dict(zip(recipes, ingredients))
    creatable = {}
    ans = []
    def check(recipe):
      if recipe in supplies:
        return True
      if recipe not in creatable:
        creatable[recipe] = False
        if recipe in recipes:
          for supply in recipes[recipe]:
            if not check(supply):
              break
          else:
            creatable[recipe] = True
      return creatable[recipe]
    for recipe in recipes:
      if check(recipe):
        ans.append(recipe)
    return ans
        