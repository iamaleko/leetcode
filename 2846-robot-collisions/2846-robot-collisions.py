class Robot:
  def __init__(self, position, health, direction, index):
    self.position = position
    self.health = health
    self.direction = direction
    self.index = index
  def __repr__(self):
    return str((self.position, self.health, self.direction, self.index))

class Solution:
  def survivedRobotsHealths(self, positions: List[int], healths: List[int], directions: str) -> List[int]:
    # separate
    robots = []
    for i in range(len(directions)):
      robot = Robot(positions[i], healths[i], directions[i], i)
      robots.append(robot)
    robots.sort(key = lambda robot: robot.position)

    # collide
    r = []
    for i in range(len(robots)):
      if robots[i].direction == 'R':
        r.append(i)
      elif robots[i].direction == 'L':
        for j in range(len(r) - 1, -1, -1):
          if robots[i].health <= 0:
            break
          if robots[r[j]].health <= 0:
            r.pop(j)
            continue
          if robots[i].health == robots[r[j]].health:
            robots[i].health = 0
            robots[r[j]].health = 0
          elif robots[i].health > robots[r[j]].health:
            robots[i].health -= 1
            robots[r[j]].health = 0
          elif robots[i].health < robots[r[j]].health:
            robots[r[j]].health -= 1
            robots[i].health = 0

    # answer
    ans = filter(lambda robot: robot.health > 0, robots)
    ans = sorted(ans, key = lambda robot: robot.index)
    ans = map(lambda robot: robot.health, ans)
    return ans

        