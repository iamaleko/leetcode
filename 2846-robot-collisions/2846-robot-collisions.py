class Node:
  def __init__(self, val, next):
    self.next = next
    self.val = val

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
    tail = Node(0, None)
    for i in range(len(robots)):
      if robots[i].direction == 'R':
        tail.next = Node(i, tail.next)
      elif robots[i].direction == 'L':
        node = tail.next
        prev = tail
        while node and robots[i].health:
          if robots[i].health == robots[node.val].health:
            robots[i].health = 0
            robots[node.val].health = 0
          elif robots[i].health > robots[node.val].health:
            robots[i].health -= 1
            robots[node.val].health = 0
          elif robots[i].health < robots[node.val].health:
            robots[node.val].health -= 1
            robots[i].health = 0
          if robots[node.val].health == 0:
            prev.next = node.next
          else:
            prev = node
          node = node.next

    # answer
    ans = filter(lambda robot: robot.health, robots)
    ans = sorted(ans, key = lambda robot: robot.index)
    ans = map(lambda robot: robot.health, ans)
    return ans

        