class Node:
  def __init__(self, robot, next):
    self.next = next
    self.robot = robot

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
    for robot in robots:
      if robot.direction == 'R':
        tail.next = Node(robot, tail.next)
      elif robot.direction == 'L':
        node = tail.next
        prev = tail
        while node and robot.health:
          if robot.health == node.robot.health:
            robot.health = 0
            node.robot.health = 0
          elif robot.health > node.robot.health:
            robot.health -= 1
            node.robot.health = 0
          elif robot.health < node.robot.health:
            node.robot.health -= 1
            robot.health = 0
          if node.robot.health == 0:
            prev.next = node.next
          else:
            prev = node
          node = node.next

    # answer
    ans = filter(lambda robot: robot.health, robots)
    ans = sorted(ans, key = lambda robot: robot.index)
    ans = map(lambda robot: robot.health, ans)
    return ans

        